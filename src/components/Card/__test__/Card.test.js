import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "../Card";


const CardProps = {
    name:"Sydney",
    phone:"111-111-1111",
    email:"laith@hotmail.com",
    image:{url:"https://images.unsplash.com/photo-1599889959407-598566c6e1f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt:"cute-cat"},
    favoured:false
}

describe("Card",  () => {
    test("should show name of cat", () => {
        render(<Card
            {...CardProps}
        />);
        expect(screen.getByRole("heading",{
            name: /sydney/i
        })).toBeInTheDocument()
    });
    test("should show phone number of cat", () => {
        render(<Card{...CardProps}/>);
        expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument()
    });
    test("should show email of cat", () => {
        render(<Card{...CardProps}/>);
        expect(screen.getByText(/laith@hotmail.com/i)).toBeInTheDocument()
    });
    test("should show image with correct src", () => {
        render(<Card{...CardProps}/>);
        expect(screen.getByAltText(/cute-cat/i).src).toBe(CardProps.image.url)
    });
    test("should show outlined heart", () => {
        render(<Card{...CardProps}/>);
        expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    });
    test("should show filled heart", () => {
        render(<Card{...CardProps} favoured={true}/>);
        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    });
    test("should toggle heart status", () => {
        render(<Card{...CardProps} />);
        userEvent.click(screen.getByRole("button"));
        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

        userEvent.click(screen.getByRole("button"));
        expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
        })
});