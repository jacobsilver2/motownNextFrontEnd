import UpdateSong from "../components/UpdateSong";

const Update = props => (
  <div>
    <UpdateSong id={props.query.id} />
  </div>
);

export default Update;
