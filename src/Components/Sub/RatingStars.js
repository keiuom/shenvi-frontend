import { Box, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const RatingStars = ({ value }) => {
  const starCount = Math.ceil((value / 100) * 5);

  return (
    <Box>
      {Array.from({ length: starCount }, (_, index) => (
        <Icon as={StarIcon} key={index} color="yellow.400" boxSize={5} />
      ))}
      {Array.from({ length: 5 - starCount }, (_, index) => (
        <Icon as={StarIcon} key={starCount + index} color="gray.300" boxSize={5} />
      ))}
    </Box>
  );
};

export default RatingStars;