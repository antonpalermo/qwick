import { Html, Button } from "@react-email/components";

export default function MagicLink(props) {
  const magicLink = props.magicLink;

  return (
    <Html lang="en">
      <Button href={magicLink}>Sign In</Button>
    </Html>
  );
}
