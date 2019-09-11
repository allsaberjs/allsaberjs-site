var CONFIG = {
  // your website's title
  document_title: "allsaberjs 文档",
  // index page
  index: "README.md",
  // sidebar file
  sidebar_file: "sidebar.md",
  // where the docs are actually stored on github - so you can edit
  base_url: "https://github.com/allsaberjs/allsaberjs-site",
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    console.log('key:', key)
    obj[key] = conf[key];
  });
}

ditto.run();
