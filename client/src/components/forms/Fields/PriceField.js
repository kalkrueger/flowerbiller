
import { Box, FormLabel, NumberInput, NumberInputField } from "@chakra-ui/react";

function PriceField({value, setPrice}) {


  return(
    <Box>
      <FormLabel htmlFor="priceField" size="sm" textAlign="center">$/Unit</FormLabel>
      <NumberInput 
        name="priceField"
        value={value}
        onChange={(value) => setPrice(value)}
        min={0}
        placeholder={"0.00"}
        width="100px"
        size="sm"
        onSubmit={(e) => e.target.value = ""}
        >
          <NumberInputField/>
      </NumberInput>
    </Box>
  )
}

export default PriceField;
