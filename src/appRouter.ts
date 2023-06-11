import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { signUpUserHandler } from "./resources/user/user.handler";

const appRouter = Router();

/**
 * @openapi
 *  /app:
 *   options:
 *    tags:
 *    - Api
 *    summary: Get the options
 *    description: Returns all options within the header
 *    operationId: getOptions
 *    responses:
 *     200:
 *      description: Successful operation.
 */
appRouter.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, DELETE, OPTIONS, GET"
    );
    return res.status(200).json({});
  }
  next();
});

/**
 * @openapi
 *  /api/users/signup:
 *   post:
 *    tags:
 *    - Users
 *    summary: Sign up a user
 *    description: Sign up a user
 *    operationId: signUpUser
 *    responses:
 *     200:
 *      description: Successful operation.
 *     400:
 *      description: Invalid email or password(s).
 */
appRouter.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be a valid email address"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 6 characters long"),
  ],
  signUpUserHandler
);

interface ProductResponseData {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  stock: number;
}

const dummyShoes: Array<ProductResponseData> = [
  {
    id: "1",
    name: "lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus convallis laoreet. Quisque ac ullamcorper purus, vel fermentum ipsum. Integer at nibh in urna rhoncus imperdiet. Proin bibendum molestie nisi, non faucibus leo. Phasellus mollis placerat facilisis. Donec eget lacus ac lorem tristique suscipit. Sed id tempor nisl, quis tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sodales erat varius diam bibendum, nec accumsan mauris aliquam. Pellentesque at commodo ante. Sed nisi lectus, tempus sit amet pharetra et, dapibus at quam. Integer condimentum mauris orci, sit amet bibendum tortor malesuada non.",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93fd72d0-516d-40af-8204-3879a7f10036/air-jordan-1-low-herenschoenen-X55MZq.png",
    price: 100,
    stock: 5,
  },
  {
    id: "2",
    name: "lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus convallis laoreet. Quisque ac ullamcorper purus, vel fermentum ipsum. Integer at nibh in urna rhoncus imperdiet. Proin bibendum molestie nisi, non faucibus leo. Phasellus mollis placerat facilisis. Donec eget lacus ac lorem tristique suscipit. Sed id tempor nisl, quis tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sodales erat varius diam bibendum, nec accumsan mauris aliquam. Pellentesque at commodo ante. Sed nisi lectus, tempus sit amet pharetra et, dapibus at quam. Integer condimentum mauris orci, sit amet bibendum tortor malesuada non.",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ef8f54a-1dda-49b8-9097-34c9c3dc766e/court-vision-low-next-nature-herenschoenen-g53MlL.png",
    price: 100,
    stock: 5,
  },
  {
    id: "3",
    name: "lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus convallis laoreet. Quisque ac ullamcorper purus, vel fermentum ipsum. Integer at nibh in urna rhoncus imperdiet. Proin bibendum molestie nisi, non faucibus leo. Phasellus mollis placerat facilisis. Donec eget lacus ac lorem tristique suscipit. Sed id tempor nisl, quis tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sodales erat varius diam bibendum, nec accumsan mauris aliquam. Pellentesque at commodo ante. Sed nisi lectus, tempus sit amet pharetra et, dapibus at quam. Integer condimentum mauris orci, sit amet bibendum tortor malesuada non.",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3ff6005-2dd2-4f18-a221-afb2da0b0d45/dunk-low-herenschoenen-h1RRnR.png",
    price: 100,
    stock: 5,
  },
  {
    id: "4",
    name: "lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus convallis laoreet. Quisque ac ullamcorper purus, vel fermentum ipsum. Integer at nibh in urna rhoncus imperdiet. Proin bibendum molestie nisi, non faucibus leo. Phasellus mollis placerat facilisis. Donec eget lacus ac lorem tristique suscipit. Sed id tempor nisl, quis tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sodales erat varius diam bibendum, nec accumsan mauris aliquam. Pellentesque at commodo ante. Sed nisi lectus, tempus sit amet pharetra et, dapibus at quam. Integer condimentum mauris orci, sit amet bibendum tortor malesuada non.",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/82e0a18c-8da5-41f5-ab5b-7ba9f4450d0c/dunk-low-herenschoenen-pbkbKk.png",
    price: 100,
    stock: 5,
  },
  {
    id: "5",
    name: "lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus convallis laoreet. Quisque ac ullamcorper purus, vel fermentum ipsum. Integer at nibh in urna rhoncus imperdiet. Proin bibendum molestie nisi, non faucibus leo. Phasellus mollis placerat facilisis. Donec eget lacus ac lorem tristique suscipit. Sed id tempor nisl, quis tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sodales erat varius diam bibendum, nec accumsan mauris aliquam. Pellentesque at commodo ante. Sed nisi lectus, tempus sit amet pharetra et, dapibus at quam. Integer condimentum mauris orci, sit amet bibendum tortor malesuada non.",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5c34784-6250-4a85-b626-c919095c16c2/air-max-sc-herenschoenen-z1CqsQ.png",
    price: 100,
    stock: 5,
  },
  {
    id: "6",
    name: "lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus convallis laoreet. Quisque ac ullamcorper purus, vel fermentum ipsum. Integer at nibh in urna rhoncus imperdiet. Proin bibendum molestie nisi, non faucibus leo. Phasellus mollis placerat facilisis. Donec eget lacus ac lorem tristique suscipit. Sed id tempor nisl, quis tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sodales erat varius diam bibendum, nec accumsan mauris aliquam. Pellentesque at commodo ante. Sed nisi lectus, tempus sit amet pharetra et, dapibus at quam. Integer condimentum mauris orci, sit amet bibendum tortor malesuada non.",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-herenschoen-GjGXSP.png",
    price: 100,
    stock: 5,
  },
  {
    id: "7",
    name: "lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus convallis laoreet. Quisque ac ullamcorper purus, vel fermentum ipsum. Integer at nibh in urna rhoncus imperdiet. Proin bibendum molestie nisi, non faucibus leo. Phasellus mollis placerat facilisis. Donec eget lacus ac lorem tristique suscipit. Sed id tempor nisl, quis tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sodales erat varius diam bibendum, nec accumsan mauris aliquam. Pellentesque at commodo ante. Sed nisi lectus, tempus sit amet pharetra et, dapibus at quam. Integer condimentum mauris orci, sit amet bibendum tortor malesuada non.",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b032763f-bd34-4741-8967-658653e7ea5f/air-force-1-07-herenschoenen-GGhsx1.png",
    price: 100,
    stock: 5,
  },
  {
    id: "8",
    name: "lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus convallis laoreet. Quisque ac ullamcorper purus, vel fermentum ipsum. Integer at nibh in urna rhoncus imperdiet. Proin bibendum molestie nisi, non faucibus leo. Phasellus mollis placerat facilisis. Donec eget lacus ac lorem tristique suscipit. Sed id tempor nisl, quis tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sodales erat varius diam bibendum, nec accumsan mauris aliquam. Pellentesque at commodo ante. Sed nisi lectus, tempus sit amet pharetra et, dapibus at quam. Integer condimentum mauris orci, sit amet bibendum tortor malesuada non.",
    imagePath:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/820fbfd3-afd1-4f8f-b3b4-d707e851d9d6/court-vision-low-next-nature-herenschoenen-KgBcZj.png",
    price: 100,
    stock: 5,
  },
];

export async function getProductsHandler(req: Request, res: Response) {
  const { body } = req;
  console.log(body);
  return res.status(200).send(dummyShoes);
}

// export async function getProductHandler(req: Request, res: Response) {
//   const { body, params } = req;

//   console.log(params);

//   return res.status(200).send(dummyShoes[0]);
// }

// appRouter.get("/products/:id", getProductHandler);

appRouter.get("/products", getProductsHandler);

appRouter.all("*", async (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  return res.status(404).send({});
});

export default appRouter;
