var Airtable = require("airtable");
var fs = require("fs");
var base = new Airtable({ apiKey: "keypjF272uQSm5mjL" }).base(
  "app7cLE9NprlhMUWn"
);

base("Products")
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 300
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      const products = [];
      records.forEach(function(record) {
        let images = "";
        if (record.get("Images")) {
          images = record.get("Images")[0].url;
        }
        products.push({
          Name: record.get("Name"),
          Description: record.get("Description"),
          Category: record.get("Category"),
          Price: record.get("Price"),
          Images: images,
          Amazon: record.get("Amazon")
        });
        console.log("Retrieved", record.get("Name"));
      });
      fs.writeFileSync(
        "products.js",
        "export default " + JSON.stringify(products, "utf8")
      );

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
