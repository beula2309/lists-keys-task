import ComponentSecont from "./component2";

 function ComponentFirst(props){
  return(
    <>
    <ComponentSecont value={props.myarray} ></ComponentSecont>
    </>
  );
 };
 export default ComponentFirst;