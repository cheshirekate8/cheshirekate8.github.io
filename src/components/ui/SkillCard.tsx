import { motion } from "framer-motion";

const SkillCard = ({ name, icon }: { name: string; icon: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white dark:bg-marian-blue border border-vivid-sky dark:border-pacific-cyan rounded-lg p-4 text-center hover:shadow-lg transition-all"
  >
    <div className="text-3xl mb-2">{icon}</div>
    <p className="text-marian-blue dark:text-light-cyan font-medium">{name}</p>
  </motion.div>
);

export default SkillCard;
