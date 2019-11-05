import React from "react";
import {SVGBtn} from "./form-items";
import Close from "./resources/Close.svg"

import { Box, Button, Grommet, Heading, Layer, Select, Text } from "grommet";
import { grommet } from "grommet/themes";

const ConfirmDelete = (props) => {
  const [open, setOpen] = React.useState();
 

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  return (
    <Grommet theme={grommet} plain>
      <Box fill align="center" justify="center">
      <SVGBtn bg="#eb5757" bgOnHover="#eb2d3e" className='icon' src={Close}
        onClick={onOpen} plain/>
      </Box>
      {open && (
        <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Confirm
            </Heading>
            <Text>Are you sure you want to delete?</Text>
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: "medium", bottom: "small" }}
            >
              <Button label="Cancel"onClick={onClose} color="dark-3" />
              <Button
                label={
                  <Text color="white">
                    <strong>Delete</strong>
                  </Text>
                }
                onClick={() => props.handleDelete(props.id)}
                primary
                color="status-critical"
              />
            </Box>
          </Box>
        </Layer>
      )}
    </Grommet>
  );
};

export default ConfirmDelete;