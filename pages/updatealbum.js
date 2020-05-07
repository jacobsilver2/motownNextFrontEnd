import UpdateAlbum from "../components/UpdateAlbum";

const Update = (props) => (
  <div>
    <UpdateAlbum id={props.query.id} />
  </div>
);

export default Update;
