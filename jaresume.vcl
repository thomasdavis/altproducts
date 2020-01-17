
sub vcl_recv {
#FASTLY recv

  if (req.request != "HEAD" && req.request != "GET" && req.request != "FASTLYPURGE") {
    return(pass);
  }

  # ===========================================================
  # ================= JA RESUME ===============
  # ===========================================================
  # Notes:
  # - This isn't the best way to do this but I have no idea what I am doing really
  #   so it wil have to suffice. p_ is just my little syntax for query strings
  #   represents some sort of pop server caching strat thing.
  #   I am just always sticking ?p_fastly on this to make things easier
  # - We have to check if we have already added the query string a lot because of shielding

  if (req.url ~ "\/api\/" || req.url ~ "\/dashboard\/") {
    return(pass);
  }

  if ( req.url !~ "p_fastly" ){
    # Check to see if there is already query string parameters
    if( req.url ~ ".*\?(.*)" ) {
      set req.url = regsub(req.url, "\?", "?p_fastly&");

      # Append the existing query string parameters
      # Deprecated - Just an example of a match group
      # set req.url = req.url re.group.1;
    } else {
      # If no query string parameters, lets just add on our one
      set req.url = req.url "?p_fastly";
    }
  }

  if( req.http.User-Agent ~ "Googlebot" && req.url !~ "p_googlebot") {
    set req.url = req.url "&p_googlebot";
    unset req.http.Cookie;
  }

  if( (req.http.User-Agent ~ "iP(hone|od|ad)" || req.http.User-Agent ~ "Android") && req.url !~ "p_mobile") {
    set req.url = req.url "&p_mobile";
  }

  # ===========================================================
  # ================= JA RESUME ===============
  # ===========================================================



  return(lookup);
}

sub vcl_fetch {

  # ===========================================================
  # ================= JA RESUME ===============
  # ===========================================================
  if (beresp.http.Set-Cookie) {
    # ... so store it temporarily
    set req.http.Tmp-Set-Cookie = beresp.http.Set-Cookie;
    # ... and then unset it
    unset beresp.http.Set-Cookie;
  }
  # ===========================================================
  # ================= JA RESUME ===============
  # ===========================================================

#FASTLY fetch

  if ((beresp.status == 500 || beresp.status == 503) && req.restarts < 1 && (req.request == "GET" || req.request == "HEAD")) {
    restart;
  }

  if(req.restarts > 0 ) {
    set beresp.http.Fastly-Restarts = req.restarts;
  }

  if (beresp.http.Set-Cookie) {
    set req.http.Fastly-Cachetype = "SETCOOKIE";
    return (pass);
  }

  if (beresp.http.Cache-Control ~ "private") {
    set req.http.Fastly-Cachetype = "PRIVATE";
    return (pass);
  }

  if (beresp.status == 500 || beresp.status == 503) {
    set req.http.Fastly-Cachetype = "ERROR";
    set beresp.ttl = 1s;
    set beresp.grace = 5s;
    return (deliver);
  }

  if (beresp.http.Expires || beresp.http.Surrogate-Control ~ "max-age" || beresp.http.Cache-Control ~"(s-maxage|max-age)") {
    # keep the ttl here
  } else {
    # apply the default ttl
    set beresp.ttl = 3600s;
  }

  return(deliver);
}

sub vcl_hit {
#FASTLY hit

  if (!obj.cacheable) {
    return(pass);
  }
  return(deliver);
}

sub vcl_miss {
#FASTLY miss
  return(fetch);
}

sub vcl_deliver {
  # ===========================================================
  # ================= JARESUME ===============
  # ===========================================================
  # Send the Cookie header again if we have it
  if (req.http.Tmp-Set-Cookie) {
    set resp.http.Set-Cookie = req.http.Tmp-Set-Cookie;
  }
  # ===========================================================
  # ================= JARESUME ===============
  # ===========================================================

#FASTLY deliver
  return(deliver);
}

sub vcl_error {
#FASTLY error
}

sub vcl_pass {
#FASTLY pass
}
