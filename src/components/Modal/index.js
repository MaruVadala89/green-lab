import React, { Fragment, useState } from "react";
import { Dialog, Grid, Button } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import bee from '../../images/bee2.png'
import { Link } from "react-router-dom";

const DefaultModal = ({
  maxWidth,
  open,
  onClose,
  addToCartProduct,
  product,
}) => {
  const [qty, setQty] = useState(1);

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <i className="fa fa-close"></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={onClose}
        ></DialogTitle>
        <Grid className="modalBody modal-body">
          <div className="product-details">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="product-single-img">
                  <div className="modal-product">
                    <div className="item">
                      <img src={product && product.proImg} alt="proImg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="product-single-content">
                  <h5>{product && product.title}</h5>
                  <h6>${product && product.price}</h6>
                  <p>
                    {product && product.description 
                      ? product.description.split('\n').map((line, index) => (
                          <span key={index}>{line}<br /></span>
                        ))
                      : "No description available"}
                  </p>
                  
                  <div className="pro-single-btn">
                    <Grid className="quantity cart-plus-minus">
                      <Button
                        className="dec qtybutton"
                        onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}
                      >
                        -
                      </Button>
                      <input
                        value={qty}
                        onChange={() => setQty(qty)}
                        type="text"
                      />
                      <Button
                        className="inc qtybutton"
                        onClick={() => setQty(qty + 1)}
                      >
                        +
                      </Button>
                    </Grid>
                    <button
                      onClick={() => addToCartProduct(product, qty)}
                      className="theme-btn"
                    >
                      Agregar
                    </button>
                  </div>

                  <div className="m-shape">
                    <img src={bee} alt="" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default DefaultModal;
