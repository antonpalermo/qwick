import useDocument from '../hooks/use-document';
import { Button } from '@qwick/web-components'

export default function Assets() {
  useDocument('Assets');

  return (
    <div>
      <h1>Assets</h1>
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" id="name" />
        <Button onClick={() => console.log('registered')}>register</Button>
      </form>
    </div>
  );
}
