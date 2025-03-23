import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    interface FAQ {
        question: string;
        answer: string;
    }

    const faqs: FAQ[] = [
        { question: "What is the symposium about?", answer: "The symposium is an annual college event where students showcase their projects, attend workshops, and participate in technical and non-technical events." },
        { question: "How can I register for the symposium?", answer: "You can register through our official website by filling out the registration form and completing the payment process." },
        { question: "Are there any participation fees?", answer: "Yes, there is a nominal fee for participation, which varies based on the events and workshops you choose to attend." },
        { question: "Will I receive a certificate for attending?", answer: "Yes, participants will receive an e-certificate for attending the symposium and participating in events." },
        { question: "Who can participate in the symposium?", answer: "The symposium is open to all college students, including undergraduates and postgraduates from various disciplines." }
    ];

    const toggleFAQ = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-4/5 mx-auto">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Frequently Asked Questions</h1>
                <p className="text-gray-600 dark:text-gray-300">Find answers to common questions below.</p>
            </div>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 dark:bg-gray-200">
                        <div 
                            className="flex justify-between items-center cursor-pointer" 
                            onClick={() => toggleFAQ(index)}
                        >
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-900">{faq.question}</h2>
                            <motion.span 
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-900" />
                            </motion.span>
                        </div>
                        {openIndex === index && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                                className="mt-3 text-gray-700 dark:text-gray-900"
                            >
                                <p>{faq.answer}</p>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
