import Image from "next/image";

export default function Home() {
  return (
    
        <>
        <div>My name is Asfa</div>
        <User name = "Asifa" />
        <User name = "Asfa"/>
        </> 
  );
}

const User = (props:any) => {
  return(
      <>
      <div>I am a web developer {props.name} </div>
      </>
  )
}