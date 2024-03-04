import Image from "next/image";

const Survey = () => {
  return (
    <div className="container pt-40">
      <div className="grid gap-20 lg:grid-cols-[50%,1fr]">
        <div>
          <Image
            className="w-[100%] h-auuto lg:w-auto lg:h-[90vh]"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>

        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-orange-500">Food</span>
          </h2>
          <p className="text-gray-700 pt-16">
            Suspendisse tellus neque, accumsan a vehicula quis, sagittis sit
            amet ligula. Vestibulum vitae lectus eget sapien tincidunt
            elementum. Integer suscipit urna mauris, vitae euismod sapien cursus
            vel. Quisque id orci sit amet diam suscipit posuere. Vivamus
            sollicitudin congue maximus.
          </p>
          <p className="text-gray-700 pt-8">
            Etiam finibus, purus vel eleifend finibus, urna orci mollis elit,
            quis cursus elit justo sed dui. Fusce ullamcorper augue non augue
            imperdiet tincidunt. Duis lacinia mauris eu posuere ornare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
