import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.svg",
    title: "Fix broken machine",
    description: "Choose a machine, contact the owner, arrange a time and place to fix it.",
  },
  {
    icon: "/steps/2.svg",
    title: "Upload Proof",
    description: "After the repair, upload an image or video of the fixed machine for validation.",
  },
  {
    icon: "/steps/3.svg",
    title: "Earn Rewards",
    description: "Get rewarded with B3TR tokens for fixing a machine and preventing e-waste.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex p={{ base: 4 }} w="100%" direction={{ base: "column", md: "row" }}>
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
