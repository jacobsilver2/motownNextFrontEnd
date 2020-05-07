import UpdateComposer from "../components/UpdateComposer";

const Update = (props) => (
  <div>
    <UpdateComposer id={props.query.id} />
  </div>
);

export default Update;
