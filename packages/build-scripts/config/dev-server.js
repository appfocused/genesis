const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');

module.exports = {
  hot: true,
  overlay: false,
  before(app, server) {
    // This lets us fetch source contents from webpack for the error overlay
    app.use(evalSourceMapMiddleware(server));
    // This lets us open files from the runtime error overlay.
    app.use(errorOverlayMiddleware());
  }
};
