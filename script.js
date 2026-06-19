function calculateGrade() {
            let marks = [
                Number(document.getElementById("sub1").value),
                Number(document.getElementById("sub2").value),
                Number(document.getElementById("sub3").value),
                Number(document.getElementById("sub4").value)
            ];

            let total = 0;

            // Using loop
            for (let i = 0; i < marks.length; i++) {
                total += marks[i];
            }

            let average = total / 4;
            let grade;

            if (average >= 90)
                grade = "A+";
            else if (average >= 80)
                grade = "A";
            else if (average >= 70)
                grade = "B";
            else if (average >= 60)
                grade = "C";
            else if (average >= 50)
                grade = "D";
            else
                grade = "F";

            document.getElementById("result").innerHTML =
                `<p><b>Total:</b> ${total}</p>
                 <p><b>Average:</b> ${average.toFixed(2)}</p>
                 <p><b>Grade:</b> ${grade}</p>`;
}