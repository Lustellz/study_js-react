import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DemoOutput RUNNING");
    return <MyParagraph show={props.show} />;
};

export default DemoOutput;
