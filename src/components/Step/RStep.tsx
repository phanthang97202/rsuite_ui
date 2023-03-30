import React, { useState } from "react";
import { Button, ButtonGroup, Panel, Placeholder, Steps } from "rsuite";
import WechatIcon from "@rsuite/icons/legacy/Wechat";

const RStep = () => {
  const [step, setStep] = useState(0);
  const onChange = (nextStep: number) => {
    setStep(nextStep < 0 ? 0 : nextStep > 6 ? 6 : nextStep);
  };
  const onNext = () => {
    return onChange(step + 1);
  };
  const onPrevious = () => {
    return onChange(step - 1);
  };
  return (
    <>
      <Steps current={step}>
        <Steps.Item title="Step 1" description={"This is description"} />
        <Steps.Item
          title="Step 2"
          icon={<WechatIcon style={{ fontSize: "40px" }} />}
          description={"This is description"}
        />
        <Steps.Item title="Step 3" description={"This is description"} />
        <Steps.Item
          title="Step 4"
          description={
            "This is description This is description This is description"
          }
        />
        <Steps.Item title="Step 5" description={"This is description"} />
        <Steps.Item title="Step 6" description={"This is description"} />
      </Steps>
      <Panel header={`Giai đoạn ${step}`}>
        <Placeholder.Paragraph rows={2}></Placeholder.Paragraph>
      </Panel>
      <ButtonGroup>
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === 6}>
          Next
        </Button>
      </ButtonGroup>
      <Steps vertical current={3} currentStatus={"error"}>
        <Steps.Item title="Step 1" description={"This is description"} />
        <Steps.Item title="Step 2" description={"This is description"} />
        <Steps.Item title="Step 3" description={"This is description"} />
      </Steps>
      <Steps vertical current={3} small>
        <Steps.Item title="Step 1" description={"This is description"} />
        <Steps.Item title="Step 2" description={"This is description"} />
        <Steps.Item title="Step 3" description={"This is description"} />
      </Steps>
    </>
  );
};

export default RStep;
