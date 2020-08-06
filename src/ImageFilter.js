import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ImageFilter = ({ id, value }) => {
  
  const [status, setStatus] = useState(true);

  const handleFilter = (filterValue) => {
    console.log("in ImageFilter in handleFilter(). ", filterValue);
    var arr = filterValue.split("=");
    const fKey = arr[0];
    const fValue = arr[1];
    const miniFilter = { [fKey]: fValue };
  };

  // TODO this handle will need to have the api handle
  // multiple filters, i.e. same filter names but different values
  // THe API must be able to handle array type which it does not currently.
  // Something like this: image_type=ancillary,photopoint,phenocam
  const handleChange = (event, id) => {
    // console.log("event.target.value=", event.target.checked);
    // console.log("id=", id);
    // setStatus(false);

    var arr = id.split("=");
    const fKey = arr[0];
    const fValue = arr[1];
    const addFilter = { [fKey]: fValue };
    let updatedFilter = {};
    // if (event.target.checked === true) {
    //   // Add filter
    //   updatedFilter = { ...selectedFilter, ...addFilter };
    // } else {
    //   //Remove filter
    //   updatedFilter = { ...selectedFilter };
    //   delete updatedFilter[fValue];
    // }
  };

  return (
    <div className="">
      <div key="{id}">
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            style={{ textTransform: "capitalize" }}
            label={value.label}
            //checked={status}
            // onClick={() => handleFilter(id)}
            onChange={(event) => handleChange(event, id)}
          />
          {/* {value.doc_count} */}
        </Form.Group>
      </div>
    </div>
  );
};
export default ImageFilter;
