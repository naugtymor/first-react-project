import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusWithHooks component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"HAHAHA"}/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe("HAHAHA")
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={"HAHAHA"}/>)
        const root = component.root;
        expect(  () => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("after creation <span> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status={"HAHAHA"}/>)
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("HAHAHA");
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={"HAHAHA"}/>)
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("HAHAHA");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"HAHAHA"} updateStatus={mockCallback}/>)
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});