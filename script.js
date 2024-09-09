// Person class definition
class Person {
    constructor(name, mobile) {
        this.name = name;
        this.mobile = mobile;
    }

    // Method to display person details
    displayDetails() {
        console.log(`Name: ${this.name}, Mobile: ${this.mobile}`);
    }

    // Arrow function example as a member function
    greet = () => `Hello, my name is ${this.name}.`;

    // Static method example
    static description() {
        return 'This is a Person class.';
    }
}

// Student class inheriting from Person
class Student extends Person {
    constructor(name, mobile, rollNo) {
        super(name, mobile);
        if (rollNo <= 0) throw new Error("Roll number must be greater than zero.");
        this.rollNo = rollNo;
    }

    // Method to display student details
    displayDetails() {
        console.log(`Name: ${this.name}, Mobile: ${this.mobile}, Roll No: ${this.rollNo}`);
    }

    // Method overriding the base class method
    greet() {
        return `Hello, I am student ${this.name}.`;
    }
}

// Form validation and submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tshirt-form');
    const receiptDiv = document.getElementById('receipt');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Validate mobile number (must be 10 digits)
        const mobile = form.mobile.value;
        if (mobile.length !== 10 || isNaN(mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        // Process the order and generate receipt
        const name = form.name.value;
        const message = form.message.value;

        const person = new Person(name, mobile);
        console.log(person.displayDetails());

        // Create a new student (for demonstration)
        try {
            const student = new Student(name, mobile, 1); // Change 1 to any valid roll number
            console.log(student.displayDetails());
        } catch (error) {
            alert(error.message);
            return;
        }

        // Generate and display receipt
        const date = new Date();
        const receiptHtml = `
            <h3>Order Confirmation</h3>
            <p>Thank you, ${name}, for your order.</p>
            <p>Message: ${message}</p>
            <p>Date of Order: ${date.toLocaleDateString()}</p>
        `;
        receiptDiv.innerHTML = receiptHtml;
    });
});
