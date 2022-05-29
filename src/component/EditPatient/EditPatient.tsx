import { Button, Input, Radio, Select } from "antd";
import styled from "styled-components";

const StyledAddPatient = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const StyledInput = styled(Input)`
    width: 180px;
    padding 0 5px;
    border: 1px solid #c2c2c2;
    ::placeholder {
        color: #6f6f6f;
    }
`

const StyledSelect = styled(Select)`
    margin: 0;
    width: 180px;
    border-radius: 5px !important;
    color: #000 !important;
    .ant-select-selector {
        border: 1px solid #c2c2c2 !important;
        height: 25px !important;
    }
`

const StyledFileInput = styled(Input)`
    width: 250px;
    padding 0 5px;
    border: 1px solid #c2c2c2;
    input::placeholder {
        color: #6f6f6f;
    }
`

const StyledDiv = styled.div`
    margin-bottom: 8px;
    .ant-radio-inner {
        border: 1px solid #c2c2c2 !important;
    }
`;

const StyledLabel = styled.label`
    margin-bottom: 5px;
    display: block;
`

const StyledButton = styled(Button)`
    margin-top: 8px;
`

const AddPatient = () => {
    return <StyledAddPatient>
        <div>
            <StyledDiv>
                <StyledSelect placeholder={<span style={{padding: 0, color: "#6f6f6f", position: "relative", bottom: 3}}>{"Select Patient"}</span>}/ >
            </StyledDiv>
            <StyledDiv>
                <StyledInput placeholder={"Patient ID"}/>
            </StyledDiv>
            <StyledDiv>
                <StyledInput type={"number"} placeholder={"# Insertions"}/>
            </StyledDiv>
            <StyledDiv>
                <StyledInput type={"number"} placeholder={"# Correct Insertions"}/>
            </StyledDiv>
            <StyledDiv>
                <StyledLabel><strong>Upload CT Scan</strong></StyledLabel>
                <StyledFileInput type={"file"} multiple title="Upload CT Scan" />
            </StyledDiv>
            <StyledDiv>
                <StyledLabel><strong>Confidence (1 = none, 5 = most confident)</strong></StyledLabel>
                <Radio.Group>
                    <Radio value={1}>1</Radio>
                    <Radio value={2}>2</Radio>
                    <Radio value={3}>3</Radio>
                    <Radio value={4}>4</Radio>
                    <Radio value={5}>5</Radio>
                </Radio.Group>
            </StyledDiv>
            <StyledDiv>
                <StyledButton type="primary">Submit</StyledButton>
            </StyledDiv>
        </div>
        <div>
            {/* <img style={{marginLeft: 100}} width={500} src="https://i.ytimg.com/vi/6M9jvvdV470/maxresdefault.jpg" /> */}
        </div>
        
    </StyledAddPatient>
}

export default AddPatient;