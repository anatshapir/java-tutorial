import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  const checkSyntax = (input) => {
    const errors = [];
    if (!input.includes('int')) errors.push("לא לשכוח להשתמש במילה השמורה 'int'");
    if (!input.includes(';')) errors.push("חסר נקודה-פסיק (;) בסוף השורה");
    if (input.includes('Int') || input.includes('INT')) errors.push("'int' צריך להיות באותיות קטנות");
    if (input.includes('Scanner') && !input.includes('import java.util.Scanner')) {
      errors.push("לא לשכוח לייבא את המחלקה Scanner!");
    }
    return errors;
  };

  const lessons = [
    {
      title: "מהו משתנה מספר שלם?",
      content: "משתנה מספר שלם (int) מאחסן מספרים שלמים ללא נקודה עשרונית. בג'אווה, אנחנו מגדירים אותם באמצעות המילה השמורה 'int'",
      example: "// שמירת תאריך\nint year = 2024;\nint month = 3;\nint day = 15;",
      exercise: "צור משתנה מסוג int בשם 'number' והגדר את ערכו ל-42",
      solution: (input) => ({
        isCorrect: input.includes('int') && input.includes('number') && input.includes('42') && input.includes(';'),
        errors: checkSyntax(input)
      })
    },
    {
      title: "פעולות חשבון בסיסיות",
      content: "אנחנו יכולים לבצע פעולות חשבון בסיסיות עם משתנים שלמים: חיבור (+), חיסור (-), כפל (*), חילוק (/)",
      example: "// חישוב גיל בחודשים\nint age = 25;\nint monthsInYear = 12;\nint ageInMonths = age * monthsInYear;\n\n// חישוב ימים בשבועות\nint weeks = 3;\nint daysInWeek = 7;\nint totalDays = weeks * daysInWeek;",
      exercise: "צור שני משתנים שלמים וחבר אותם למשתנה שלישי",
      solution: (input) => ({
        isCorrect: input.split('\n').length >= 3 && input.includes('+') && input.includes('int'),
        errors: checkSyntax(input)
      })
    },
    {
      title: "עדכון ערכי משתנים",
      content: "אנחנו יכולים לשנות את ערכו של משתנה שלם אחרי שיצרנו אותו",
      example: "// מעקב אחר ניקוד במשחק\nint score = 0;\nscore = score + 100;    // ניקוד על שלב ראשון\nscore = score + 150;    // ניקוד על שלב שני\nscore++;                // נקודת בונוס",
      exercise: "צור משתנה שלם עם ערך כלשהו, ואז עדכן אותו כך שיהיה גדול ב-10 מערכו ההתחלתי",
      solution: (input) => ({
        isCorrect: input.split('\n').length >= 2 && input.includes('int') && (input.includes('+') || input.includes('+=')),
        errors: checkSyntax(input)
      })
    },
    {
      title: "הכרות עם Scanner",
      content: "כדי לקבל קלט מהמשתמש בג'אווה, אנחנו משתמשים במחלקה Scanner",
      example: "// יצירת Scanner לקליטת קלט\nimport java.util.Scanner;\n\nScanner reader = new Scanner(System.in);\n// Scanner מוכן לשימוש",
      exercise: "כתוב קוד שמייבא את Scanner ויוצר אובייקט Scanner בשם 'input'",
      solution: (input) => ({
        isCorrect: input.includes('import java.util.Scanner') && input.includes('Scanner input'),
        errors: checkSyntax(input)
      })
    },
    {
      title: "קריאת קלט מספרי",
      content: "כדי לקרוא מספר שלם מהמשתמש, אנחנו משתמשים בפעולה nextInt()",
      example: "// קליטת גיל והצגת שנת לידה\nScanner reader = new Scanner(System.in);\nSystem.out.println(\"הכנס את גילך:\");\nint age = reader.nextInt();\nint birthYear = 2024 - age;\nSystem.out.println(\"נולדת בשנת: \" + birthYear);",
      exercise: "כתוב קוד שמקבל מספר שלם מהמשתמש ושומר אותו במשתנה בשם 'number'",
      solution: (input) => ({
        isCorrect: input.includes('nextInt') && input.includes('number'),
        errors: checkSyntax(input)
      })
    },
    {
      title: "שימוש בקלט מהמשתמש",
      content: "אחרי קבלת הקלט, אנחנו יכולים להשתמש בו בדיוק כמו כל משתנה שלם אחר",
      example: "// המרת שעות לדקות\nScanner reader = new Scanner(System.in);\nSystem.out.println(\"הכנס מספר שעות:\");\nint hours = reader.nextInt();\nint minutesPerHour = 60;\nint totalMinutes = hours * minutesPerHour;\nSystem.out.println(hours + \" שעות הן \" + totalMinutes + \" דקות\");",
      exercise: "קבל מספר מהמשתמש, הכפל אותו ב-5, והדפס את התוצאה",
      solution: (input) => ({
        isCorrect: input.includes('nextInt') && input.includes('*') && input.includes('5'),
        errors: checkSyntax(input)
      })
    },
    {
      title: "שילוב משתנים וקלט",
      content: "עכשיו נשלב את כל מה שלמדנו על משתנים שלמים וקלט מהמשתמש",
      example: "// חישוב זמן נסיעה\nScanner reader = new Scanner(System.in);\nSystem.out.println(\"הכנס מרחק בקילומטרים:\");\nint distance = reader.nextInt();\nSystem.out.println(\"הכנס מהירות בקמ״ש:\");\nint speed = reader.nextInt();\nint time = distance / speed;\nSystem.out.println(\"זמן הנסיעה המשוער: \" + time + \" שעות\");",
      exercise: "כתוב תוכנית שמקבלת שני מספרים מהמשתמש, מחשבת את הסכום והמכפלה שלהם, ומציגה את התוצאות",
      solution: (input) => ({
        isCorrect: input.includes('nextInt') && input.includes('+') && input.includes('*'),
        errors: checkSyntax(input)
      })
    },
    {
      title: "פעולות מתקדמות עם קלט",
      content: "נבצע פעולות מורכבות יותר עם קלט המשתמש, כולל חישוב ממוצע ומציאת הפרש",
      example: "// חישוב ציון סופי\nScanner reader = new Scanner(System.in);\nSystem.out.println(\"הכנס ציון מבחן:\");\nint exam = reader.nextInt();\nSystem.out.println(\"הכנס ציון עבודה:\");\nint work = reader.nextInt();\nSystem.out.println(\"הכנס ציון תרגילים:\");\nint homework = reader.nextInt();\n\nint finalGrade = (exam * 60 + work * 30 + homework * 10) / 100;\nint maxScore = Math.max(Math.max(exam, work), homework);\n\nSystem.out.println(\"ציון סופי: \" + finalGrade);\nSystem.out.println(\"הציון הגבוה ביותר: \" + maxScore);",
      exercise: "כתוב תוכנית שמקבלת שלושה מספרים, מחשבת את הממוצע שלהם ואת ההפרש בין המספר הגדול ביותר לממוצע",
      solution: (input) => ({
        isCorrect: input.split('nextInt').length >= 4 && input.includes('/') && (input.includes('Math.max') || input.includes('>')),
        errors: checkSyntax(input)
      })
    }
  ];

  const nextLesson = () => {
    if (step < lessons.length - 1) {
      setStep(step + 1);
      setUserInput('');
      setFeedback('');
    }
  };

  const previousLesson = () => {
    if (step > 0) {
      setStep(step - 1);
      setUserInput('');
      setFeedback('');
    }
  };

  const checkAnswer = () => {
    const result = lessons[step].solution(userInput);
    if (result.isCorrect) {
      setFeedback('מצוין! הקוד שלך עובד נכון! 🎉');
      setScore(score + 1);
    } else {
      setFeedback(
        <div>
          <p>בוא נתקן את הבעיות הבאות:</p>
          <ul className="list-disc pr-4 mt-2">
            {result.errors.map((error, index) => (
              <li key={index} className="text-yellow-700">{error}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4" dir="rtl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">
            לימוד משתנים שלמים בג'אווה - שיעור {step + 1}/{lessons.length}
          </h1>
          <div className="text-sm text-gray-500 mb-4">
            התקדמות: {score}/{lessons.length}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">{lessons[step].title}</h3>
            <p className="mb-4">{lessons[step].content}</p>
            <div className="bg-gray-200 p-3 rounded font-mono text-sm mb-4" dir="ltr">
              {lessons[step].example.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold">תורך!</h4>
            <p className="whitespace-pre-line">{lessons[step].exercise}</p>
            <div dir="ltr">
              <textarea
                className="w-full h-64 p-2 border rounded font-mono"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="כתוב כאן את קוד הג'אווה שלך..."
              />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between items-center">
            <button
              onClick={previousLesson}
              disabled={step === 0}
              className={`px-4 py-2 rounded ${step === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              הקודם
            </button>
            <button
              onClick={checkAnswer}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              בדוק תשובה
            </button>
            <button
              onClick={nextLesson}
              disabled={step === lessons.length - 1}
              className={`px-4 py-2 rounded ${step === lessons.length - 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              הבא
            </button>
          </div>

          {feedback && (
            <div className={`p-3 rounded ${
              feedback === 'מצוין! הקוד שלך עובד נכון! 🎉' ? 'bg-green-100 text-green-700' : 'bg-yellow-100'
            }`}>
              {feedback}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
