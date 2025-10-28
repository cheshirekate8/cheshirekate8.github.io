import { IconType } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

const SkillCard = ({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: IconType;
  color: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="flex justify-center items-center bg-white dark:bg-marian-blue border border-vivid-sky dark:border-pacific-cyan rounded-lg p-4 text-center hover:shadow-lg transition-all"
  >
    {Icon ? (
      <motion.div
        whileHover={{ scale: 1.3 }}
        className="text-3xl mr-2 drop-shadow-2xl drop-shadow-black"
      >
        <Icon size={22} color={color} />
      </motion.div>
    ) : null}
    <p className="text-marian-blue dark:text-light-cyan font-medium">{name}</p>
  </motion.div>
);

export default SkillCard;
