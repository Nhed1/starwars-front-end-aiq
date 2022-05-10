import { Text } from "aiq-design-system";

export function TextInfo({ children, ...props }) {
  return (
    <Text fontFamily="sans-serif" {...props}>
      {children}
    </Text>
  );
}
