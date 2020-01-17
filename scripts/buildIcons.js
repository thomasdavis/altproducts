const fs = require("fs");
const SVGO = require("svgo");
// const camelCase = require('camelcase');
const async = require("async");
const glob = require("glob");

const folderName = "./components/Icon/svgs/";
const outputLocation = "./components/Icon/Svgs.js";

let svgContent = `import React from 'react';
`;

const templateContent = `export const <%name%> = (props) => (
  <%content%>
);
`;
const svgo = new SVGO({
  plugins: [
    {
      cleanupAttrs: true
    },
    {
      removeDoctype: true
    },
    {
      removeXMLProcInst: true
    },
    {
      removeComments: true
    },
    {
      removeMetadata: true
    },
    {
      removeTitle: true
    },
    {
      removeDesc: true
    },
    {
      removeUselessDefs: true
    },
    {
      removeEditorsNSData: true
    },
    {
      removeEmptyAttrs: true
    },
    {
      removeHiddenElems: true
    },
    {
      removeEmptyText: true
    },
    {
      removeEmptyContainers: true
    },
    {
      removeViewBox: false
    },
    {
      cleanupEnableBackground: true
    },
    {
      convertStyleToAttrs: true
    },
    {
      convertColors: true
    },
    {
      convertPathData: true
    },
    {
      convertTransform: true
    },
    {
      removeUnknownsAndDefaults: true
    },
    {
      removeNonInheritableGroupAttrs: true
    },
    {
      removeUselessStrokeAndFill: true
    },
    {
      removeUnusedNS: true
    },
    {
      cleanupIDs: true
    },
    {
      cleanupNumericValues: true
    },
    {
      moveElemsAttrsToGroup: true
    },
    {
      moveGroupAttrsToElems: true
    },
    {
      collapseGroups: true
    },
    {
      removeRasterImages: false
    },
    {
      mergePaths: true
    },
    {
      convertShapeToPath: true
    },
    {
      sortAttrs: true
    },
    {
      removeDimensions: true
    },
    {
      removeAttrs: { attrs: "(data-name)" }
    }
  ]
});

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

glob(folderName + "**/*.svg", {}, function(err, fileNames) {
  // fs.readdir(folderName, (err, fileNames) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(fileNames);
  async.eachSeries(
    fileNames,
    (fileName, cb) => {
      console.log(fileNames);
      if (fileName.indexOf(".svg") !== -1) {
        const safeFileName = capitalizeFirstLetter(
          fileName
            .replace("./components/Icon/svgs/", "")
            .replace("/", "")
            .replace(" ", "")
            .replace(".svg", "")
        );

        const fileContents = fs.readFileSync(fileName, "utf-8");

        console.log("Adding " + fileName + " as " + safeFileName);
        svgo.optimize(fileContents).then(result => {
          let fileData = result.data;
          // add props spread to svg line
          fileData = fileData.replace("<svg", "<svg {...props}");

          // transform some properties to their camelCase equiv.
          fileData = fileData.replace(/stroke-linecap/g, "strokeLinecap");
          fileData = fileData.replace(/stroke-width/g, "strokeWidth");
          fileData = fileData.replace(/stroke-linejoin/g, "strokeLinejoin");
          fileData = fileData.replace(/fill-rule/g, "fillRule");
          fileData = fileData.replace(/fill-opacity/g, "fillOpacity");
          fileData = fileData.replace(/stop-color/g, "stopColor");
          fileData = fileData.replace(/xlink:href/g, "xlinkHref");
          fileData = fileData.replace(/xmlns:xlink/g, "xmlnsXlink");
          fileData = fileData.replace(/class/g, "className");

          const transformed = templateContent
            .replace("<%name%>", safeFileName)
            .replace("<%content%>", fileData);
          svgContent = svgContent + transformed;
          cb();
        });
      } else {
        cb();
      }
    },
    () => {
      console.log("File save to: " + outputLocation);
      fs.writeFileSync(outputLocation, svgContent);
    }
  );
});
