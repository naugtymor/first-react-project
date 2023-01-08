import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusWithHooks component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"HAHAHA"}/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe("HAHAHA")
    });
    test("after creation span should be displayed with correct status", async () => {
        const component = create(<ProfileStatus status={"HAHAHA"}/>)
        const root = component.root;
        let span = await root.findByType("span");
        expect(span.length).toBe(1);
    });
    test("after creation span should contains with correct status", async () => {
        const component = create(<ProfileStatus status={"HAHAHA"}/>)
        const root = component.root;
        let span = await root.findByType("span");
        expect(span.innerText).toBe("HAHAHA");
    });
});