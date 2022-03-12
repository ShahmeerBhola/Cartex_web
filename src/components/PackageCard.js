import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@material-ui/core";
import PackageImage from "../../../assets/images/vendors/package-image.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../actions/CartActions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { borderRadius } from "@mui/material/node_modules/@mui/system";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#d12860",
  },
});

function PackageCard(props) {
  const dispatch = useDispatch();
  const {
    id,
    name,
    image,
    numberOfItem,
    packagePrice,
    trending,
    price,
    items,
  } = props.package;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;


  return (
    <>
      <Grid
        item
        sm={12}
        md={6}
        lg={4}
        style={{
          width: "fit-content",
          maxWidth: "500px",
          margin: "0 auto",
          cursor: "pointer",
        }}
      >
        <div className="border-2 border-solid rounded-xl border-gray-200 	">
          <div className='relative'>
          <img src={image!=""?image:PackageImage} alt="" className="rounded-t-xl  " />
          <div className="absolute flex flex-col gap-2 top-0 mt-2 right-0 mr-2 ">
            <IconButton style={{background:"white", borderRadius:"50%" }} onClick={props.editHandler}>
              <EditIcon className='text-primary '  />
            </IconButton>
            <IconButton style={{background:"white", borderRadius:"50%" }} onClick={props.deleteHandler} >
              <DeleteIcon className='text-primary  ' />
            </IconButton>
          </div>
          </div>
          <div className="p-4 flex flex-col gap-2 ">
          {
            props.type==='package' ? 
            <>
            <div className="flex items-center justify-between">
              <p
                className="text-lg font-bold text-primary"
                // onClick={props.onClick}
              >
                {name}
              </p>
            </div>
            
              
                <div className="flex items-center justify-start">
              <StyledRating
                name="customized-color"
                value={4.9}
                precision={0.5}
                readOnly
              />
              <p className="font-semibold text-sm ml-4 text-[#2E4765]">
                4 Reviews
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2 max-w-[300px] flex-wrap">
                {items.map((v, i) => (
                  <>
                    {v.name && (
                      <p
                        key={i}
                        className="w-fit cursor-pointer bg-gray-200 px-4 py-1 rounded-full text-sm text-gray-500"
                      >
                        {v.name}
                      </p>
                    )}
                  </>
                ))}
              </div>
              <p className="text-lg font-bold text-primary whitespace-nowrap">
                {price} Pkr
              </p>
            </div>
                </>
              :
              <>
              <div className="flex items-center justify-between">
              <p
                className="text-lg font-bold text-primary"
                // onClick={props.onClick}
              >
                {name}
              </p>
              <p className="text-lg font-bold text-primary whitespace-nowrap">
                {price} Pkr
              </p>
            </div>
              </>
            
            }
          </div>
        </div>
      </Grid>
    </>
  );
}

export default PackageCard;
