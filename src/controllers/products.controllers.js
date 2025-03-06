// import productModel from '../models/products.models.js';

// export const getProducts = async (req, res) => {
//     try {
//         const { limit, page, metFilter, filter, metOrder, ord } = req.query;

//         const pag = page ?? 1;
//         const limi = limit ?? 10; // Si no se envía un límite, por defecto es 10

//         // Si se pasa un filtro, se arma la consulta dinámica:
//         const filQuery = metFilter !== undefined ? { [metFilter]: filter } : {};
        
//         // Orden dinámico, usando el valor de 'metOrder' como clave:
//         const ordQuery = metOrder !== undefined ? { [metOrder]: ord } : {};

//         // Se usa 'sort' para el orden, si tu plugin de paginación lo requiere:
//         const prods = await productModel.paginate(filQuery, {
//             limit: limi,
//             page: pag,
//             sort: ordQuery,
//             lean: true
//         });

//         // Crear un array de números de página para la visualización
//         prods.pageNumbers = Array.from({ length: prods.totalPages }, (_, i) => ({
//             number: i + 1,
//             isCurrent: i + 1 === prods.page
//         }));
        
//         res.status(200).send(prods);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// };

// export const getProduct = async (req, res) => {
//     try {
//         const idProd = req.params.pid;
//         const prod = await productModel.findById(idProd);
//         if (prod) {
//             res.status(200).send(prod);
//         } else {
//             res.status(404).send({ message: "Producto no existe" });
//         }
//     } catch (e) {
//         res.status(500).send(e);
//     }
// };

// export const createProduct = async (req, res) => {
//     try {
//         const { title, description, category, code, price, stock } = req.body;
//         const newProduct = await productModel.create({
//             title, description, category, code, price, stock
//         });
//         res.status(201).send(newProduct);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// };

// export const updateProduct = async (req, res) => {
//     try {
//         const idProd = req.params.pid;
//         const updateProduct = req.body;
//         const rta = await productModel.findByIdAndUpdate(idProd, updateProduct, { new: true });
//         if (rta) {
//             res.status(200).send({ message: "Producto actualizado correctamente" });
//         } else {
//             res.status(404).send({ message: "Producto no existe" });
//         }
//     } catch (e) {
//         res.status(500).send(e);
//     }
// };

// export const deleteProduct = async (req, res) => {
//     try {
//         const idProd = req.params.pid;
//         const rta = await productModel.findByIdAndDelete(idProd);
//         if (rta) {
//             res.status(200).send({ message: "Producto eliminado correctamente" });
//         } else {
//             res.status(404).send({ message: "Producto no existe" });
//         }
//     } catch (e) {
//         res.status(500).send(e);
//     }
// };
