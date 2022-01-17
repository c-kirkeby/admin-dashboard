import { withSwagger } from "next-swagger-doc";
import { swagger } from "src/lib/config";

const swaggerHandler = withSwagger(swagger);
export default swaggerHandler();
