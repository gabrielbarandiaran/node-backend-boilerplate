'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.mainRouter = void 0;
const express_1 = __importDefault(require('express'));
const v1_controller_module_1 = require('@/infra/http/controllers/v1/v1-controller.module');
const mainRouter = express_1.default.Router();
exports.mainRouter = mainRouter;
mainRouter.use('/v1', v1_controller_module_1.v1Router);
//# sourceMappingURL=controller.modules.js.map
