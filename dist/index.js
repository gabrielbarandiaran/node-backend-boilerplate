'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
const controller_modules_1 = require('./infra/http/controllers/controller.modules');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use('/api', controller_modules_1.mainRouter);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
