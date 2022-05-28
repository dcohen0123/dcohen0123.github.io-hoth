import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
//@ts-ignore
import { DatePicker, Input, Select } from "antd";
import { IDashboard } from "../../interface/IDashboard";
import { IInput, InputType } from "../../interface/IInput";
import { IState } from "../../interface/IState";
import { UpdateDashboardInput } from "../../redux/Workspace/WorkspaceActions";

const StyledInputs = styled.div`
    flex: 0;
    background: #fff;
    padding: 2px 1px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
`;

const { RangePicker } = DatePicker;

export interface IDashboardInputsProps {
    viewId: string;
}

const { Option } = Select;

export const StyledInput = styled.div`
    display: inline-block;
    margin-right: 1px;
    vertical-align: top;
    height: 0;
`

const StyledRangePicker = styled(RangePicker)`
    margin: 0;
    border: 1px solid #c2c2c2 !important;
    border-radius: 3px;
    height: 22px !important;
    input::placeholder {
        font-size: 13px;
        height: 22px !important;
    }
`

const StyledWidgetSelect = styled(Select)`
    margin: 0;
    width: 180px;
    border-radius: 5px !important;
    color: #000 !important;
    .ant-select-selector {
        border: 1px solid #c2c2c2 !important;
        font-size: 13px;
        height: 22px !important;
    }
`;

const StyledInputText = styled(Input)`
    vertical-align: top;
    position: relative;
    top: 1px;
    margin-right: 3px;
    height: 19px;
    width: 100px;
    font-size: 12px;
    padding:0;
    padding-right: 3px;
    padding-left: 5px;
    border: 1px solid #c2c2c2 !important;
`

const DashboardInputs = ({viewId}: IDashboardInputsProps) => {
    const dispatch = useDispatch();
    const dashboard: IDashboard | undefined = useSelector((state: IState) => state?.workspaceManager?.selected?.views?.find(x => x.id === viewId)?.meta);
    const getInput = (x: IInput) => {
        let result: JSX.Element | null = null;
        switch(x.type) {
            case InputType.Select: {
                result = getSelect(x);
                break;
            }
            case InputType.Search: {
                result = getSearch(x);
                break;
            }
            case InputType.DateRange: {
                result = getDateRange(x);
                break;
            }
            default: {
                result = null;
            }
        }
        return <StyledInput key={x?.id}>{result}</StyledInput>;
    }
    const getDateRange = (x: IInput) => {
        const handleChange = (dates: any) => {
            dispatch({type: UpdateDashboardInput, payload: {viewId, inputId: x.id, value: dates}});
        }
        return <StyledRangePicker size="small" value={x?.value} onChange={handleChange} />
    }
    const getSelect = (x: IInput) => {
        const handleChange = (value: any) => dispatch({type: UpdateDashboardInput, payload: {viewId, inputId: x.id, value}})
        return <StyledWidgetSelect
            placeholder={<span>{x?.meta?.placeholder}</span>}
            size={"small"}
            onChange={handleChange}
            optionFilterProp="children"
            value={x?.value ?? x?.meta?.default}
            filterOption={(input: any, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        > {x?.meta?.data?.map((y: any) => (<Option key={y.value} value={y.value}>{y.key}</Option>))}
        </StyledWidgetSelect>
    }
    const getSearch = (x: IInput) => {
        return <StyledInputText allowClear placeholder={x?.meta?.placeholder} />
    }
    return <StyledInputs>
        <div>
            {dashboard?.inputs?.filter(x => x?.align === "left")?.map(x => getInput(x))}
        </div>
        <div>
            {dashboard?.inputs?.filter(x => x?.align === "right")?.map(x => getInput(x))}
        </div>

    </StyledInputs>
}

export default DashboardInputs;