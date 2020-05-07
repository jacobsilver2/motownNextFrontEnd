import UpdateArtist from "../components/UpdateArtist";

const Update = (props) => (
  <div>
    <UpdateArtist id={props.query.id} />
  </div>
);

export default Update;
