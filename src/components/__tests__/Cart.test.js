import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";

global.

it("Should render RestaurantCard Menu component",async()=>{
    await act (async()=>render(<RestaurantMenu/>));
});