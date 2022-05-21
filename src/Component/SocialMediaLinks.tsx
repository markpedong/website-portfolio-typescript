import { Group, Text } from "@mantine/core";
import React from "react";
import { SocialLinks } from "../Config/Variable";
import { motion } from "framer-motion";

export const SocialMediaLinks = () => {
  return (
    <Group px="0" pt="1rem" direction="row">
      {SocialLinks?.map((link) => (
        <motion.div whileHover={{ scale: 1.3 }}>
          <Text component="a" key={link.link} href={link.link} target="_blank">
            {link.icon}
          </Text>
        </motion.div>
      ))}
    </Group>
  );
};
