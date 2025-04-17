'use client';

import { useSearchParams } from 'next/navigation';

const subjectMessages: Record<string, string> = {
  Biology: "Your way of teaching biology was amazing, and the way you explained every concept made everything so clear and easy to understand. We truly loved your teaching style and will always remember your classes. Thank you for making biology so interesting and fun!",
  Computer: "Your teaching of computer science was truly remarkable. The way you made complex topics like programming and algorithms easy to understand was amazing. You not only taught us the technical aspects but also sparked our curiosity to explore more. We’ll always appreciate how you made learning computers so engaging and fun!",
  Chemistry: "Your chemistry lessons were always exciting and full of energy. You made even the most difficult concepts like chemical reactions and the periodic table seem simple and interesting. Your method of breaking down complex topics into understandable steps really helped us grasp the subject better. We will always remember how you turned chemistry into something we loved learning!",
  English: "Your English classes were a breath of fresh air. Whether it was literature or grammar, you had a way of making everything so accessible and interesting. Your passion for the subject was evident, and it made us excited to learn. You not only improved our language skills but also taught us to appreciate the beauty of words and stories. We’re going to miss your dynamic approach to teaching!",
  Urdu: "Your way of teaching Urdu was deeply engaging. You brought the beauty of our language to life, making every lesson feel meaningful and relevant. Whether it was poetry or prose, you explained every piece with such depth and clarity, helping us understand its true essence. You made learning Urdu enjoyable, and we will always cherish the knowledge you shared with us.",
  Islamiyat: "Your teaching of Islamiyat was inspiring and filled with wisdom. The way you explained the teachings of Islam, its principles, and its history was both clear and thought-provoking. You helped us understand the deeper meanings behind every lesson, making the subject more than just a course. Your guidance will always be with us as we continue to grow in our understanding of Islam.",
  Physics: "Physics was always an adventure in your class. The way you explained abstract concepts like laws of motion, electricity, and optics was nothing short of amazing. You brought the subject to life by showing how physics is a part of our everyday lives, and that made learning so much more fun and relatable. We will always remember your inspiring lessons!",
  Maths: "Maths was no longer intimidating because of your brilliant way of teaching. You had a unique ability to make even the toughest problems easy to solve. The clarity with which you explained every concept, from algebra to calculus, made us feel confident and eager to learn more. You made maths enjoyable, and for that, we are really grateful",
  Sindhi: "Your Sindhi lessons were always so enriching. You explained the language, its culture, and traditions with such enthusiasm and care, making every lesson feel significant. Your approach made Sindhi not just a subject, but a journey of discovery about our heritage. We are grateful for how you made learning Sindhi an experience that will stay with us forever.",
  PakistanStudies: "Your lessons on Pakistan Studies were incredibly insightful. You made history and geography come alive by connecting us to the past and showing us how the events shaped our present. Your ability to explain the history of Pakistan with such clarity and passion made us proud of our country. You have truly made a lasting impact on how we view our history and culture. We will always remember your engaging lessons!",
};

export default function ThankYou() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const title = searchParams.get('title');
  const subject = searchParams.get('subject') || 'Biology';
  const gender = searchParams.get('gender') || 'Male';

  const prefix = gender === 'Female' ? 'Miss' : 'Sir';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <div className="max-w-3xl w-full bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-center text-purple-400 mb-2">Thank You, {prefix} {name}!</h1>
        <p className="text-center text-lg font-semibold text-teal-300 mb-4">{title}</p>

        <p className="text-justify text-base leading-relaxed text-gray-300 mb-6 italic">{subjectMessages[subject]}</p>

        <p className="text-justify text-sm leading-relaxed text-gray-400 mb-6">
          We kindly ask that you keep us in your prayers as we continue on our journeys toward success. Your guidance and wisdom have played a significant role in shaping our understanding and growth, and we hope to carry forward the lessons you’ve taught us. The impact you’ve had on our lives will always be remembered and cherished, and we are deeply grateful for the time and effort you’ve invested in us. As we move forward, we will strive to make you proud and uphold the values you&apos;ve instilled in us.
        </p>

        <p className="text-justify text-sm leading-relaxed text-gray-300 mb-6">
          We send you our heartfelt greetings and warmest wishes, with all of us students expressing our gratitude and admiration. Your impact on us has been immeasurable, and we truly appreciate everything you’ve done for us. May happiness, success, and blessings follow you in everything you do. Please know that our thoughts and best wishes are always with you.
        </p>

        <a
          href={`https://wa.me/923182965978?text=${encodeURIComponent(`Dear ${prefix} ${name}, we want to hear your thoughts for the farewell party. How was it? Did you enjoy it? Will you miss us? And please leave a last message for us students.`)}`}
          className="block text-center bg-green-600 text-white font-semibold py-2 px-6 rounded-xl hover:bg-green-700 transition duration-200"
          target="_blank"
        >
          WhatsApp: We want to hear your thoughts
        </a>

        <p className="text-center mt-8 text-pink-400 font-semibold text-lg leading-relaxed">
          A heartfelt thank you to our beloved teachers, whose dedication, patience, and unwavering support have shaped us into who we are today. Your guidance has not only taught us academic lessons but also life lessons that we will carry with us forever. You have inspired us to think critically, work hard, and believe in our potential. Your kindness and encouragement have made a lasting impact, and for that, we will always be grateful. Thank you for believing in us and for being the guiding lights in our journey. ❤️❤️
        </p>

        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">Designed by Muhammad Shariq</p>
          <p className="text-gray-500 text-xs">12th Pre-Medical | Cloud Applied Generative AI Engineering Student</p>
        </div>
      </div>
    </div>
  );
}