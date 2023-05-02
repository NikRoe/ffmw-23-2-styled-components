import Button from "../components/Button";
import Container from "../components/Container";
import InfoBox from "../components/InfoBox";
import Link from "../components/Link";

export default function HomePage() {
  return (
    <>
      <Container direction="column">
        <InfoBox title="This is an info" message="Read it carefully!" />
        <InfoBox
          title="It worked"
          message="You have done it"
          variant="success"
        />
        <InfoBox title="Error" message="Something went wrong" variant="error" />
      </Container>
      <Container direction="column">
        <Button>Click me</Button>
        <Button color="danger">Click me not</Button>
      </Container>
      <Container>
        <p>
          This is a <Link href="/"> styled link</Link>.
        </p>
      </Container>
    </>
  );
}
