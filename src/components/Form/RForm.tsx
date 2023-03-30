import React, { useEffect, useRef, useState } from "react";
import {
  Col,
  Divider,
  Form,
  Grid,
  Input,
  Row,
  InputNumber,
  Rate,
  Toggle,
  SelectPicker,
  CheckboxGroup,
  Checkbox,
  Button,
  Schema,
  Message,
  toaster,
} from "rsuite";
import Field from "./Field";

const COUNTRY_DUMMY = [
  {
    id: 1,
    country: "Ha Nam",
  },
  {
    id: 2,
    country: "Ha Noi",
  },
  {
    id: 3,
    country: "Ninh Binh",
  },
];

const model = Schema.Model({
  Name: Schema.Types.StringType()
    .minLength(5, "Your name must be min 5 word")
    .isRequired("This field is required"),
  Skills: Schema.Types.ArrayType().isRequiredOrEmpty("This field is required"),
});

const RForm = () => {
  const formRef: any = useRef();
  //   const [skills, setSkills] = useState([]);

  const [formError, setFormError] = useState<any>({});

  const [formValue, setFormValue] = useState({
    Name: "Thang",
    Age: 1,
    Rate: 2,
    Country: "Ha Nam",
    Sex: true,
    Skills: ["ReactJs"],
  });

  useEffect(() => {
    // console.log(skills);
    console.log("==formValue", formValue);
  }, [formValue]);

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      toaster.push(<Message type="error">Error</Message>);
      return;
    }
    toaster.push(<Message type="success">Success</Message>);
    localStorage.setItem("form", JSON.stringify(formValue));
  };

  return (
    <>
      <Grid>
        <Row>
          <Col md={12}>
            <Divider>==========RFORM==========</Divider>
            <Form
              ref={formRef}
              onChange={(value: any, _) => setFormValue(value)}
              layout="inline"
              formValue={formValue}
              model={model}
              onCheck={setFormError}
            >
              <Field
                accepter={Input}
                name="Name"
                label="User name"
                placeholder="Enter your name..."
                error={formError.Name}
              />
              <Field
                accepter={InputNumber}
                name="Age"
                label="Age"
                placeholder="Enter your age..."
              />
              <Field accepter={Rate} name="Rate" label="Rate" />
              <br />
              <Field
                accepter={SelectPicker}
                name="Country"
                label="Country"
                data={COUNTRY_DUMMY.map((c) => ({
                  label: c.country,
                  value: c.country,
                }))}
              />
              <br />
              <Field
                accepter={Toggle}
                name="Sex"
                label="Sex"
                checkedChildren="Male"
                unCheckedChildren="Female"
              />
              <br />
              <Field
                accepter={CheckboxGroup}
                name="Skills"
                // value={skills}
                label="Skills"
                error={formError.Skills}
                // onChange={(value: any) => setSkills(value)}
              >
                <Checkbox value="ReactJs">ReactJs</Checkbox>
                <Checkbox value="NodeJs">NodeJs</Checkbox>
                <Checkbox value="Angular">Angular</Checkbox>
              </Field>
              <br />
              <Form.Group>
                <Button onClick={handleSubmit} appearance="primary">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default RForm;
