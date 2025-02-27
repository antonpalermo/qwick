import useDocument from '../hooks/use-document';

export default function Assets() {
  useDocument('Assets');

  return (
    <div>
      <h1>Assets</h1>
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" id="name" />
        <button onClick={() => console.log('registered')}>register</button>
      </form>
    </div>
  );
}
