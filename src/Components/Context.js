import { createContext, useState } from "react";
import products from "../Data";
const CartContext = createContext();

export function CartProvider({ children }) {
  const list = products["product"];
  const [addCart, setAddCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState(0);
  const [selectedList, setSelectedList] = useState(list);
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputs, setInputs] = useState("");

  const search = (event) => {
    event.preventDefault();
    if (inputs == "") {
      setSelectedList(list);
    } else {
      setIsSubmit(true);
      setSelectedList(
        list.filter(
          (item) =>
            item.name.toLowerCase().includes(inputs) ||
            item.brand.toLowerCase().includes(inputs)
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        list,
        addCart,
        setAddCart,
        amount,
        setAmount,
        number,
        setNumber,
        selectedList,
        setSelectedList,
        inputs,
        search,
        setInputs,
        isSubmit,
        setIsSubmit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
