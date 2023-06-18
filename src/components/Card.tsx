import Image from "next/image";
import {faker} from "@faker-js/faker";
import Icon from "@/components/Icon";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

type CardProps = {
    fullName: string;
    position: string;
    photo: string;
    seniority: number;
    github: string;
    linkedin: string;
}

const Card = ({fullName, position, photo, seniority, github, linkedin}: CardProps) => {
    return (
        <div className="flex flex-wrap gap-y-5 bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col w-full">
                {!photo && (
                    <Image src={faker.image.urlLoremFlickr({category: 'people'})} alt={fullName} width="100"
                           height="100" className="w-full mb-4 rounded-md"/>
                )}
                <h2 className="text-xl font-bold mb-2 text-gray-600">{fullName}</h2>
                <p className="text-gray-600 mb-2">
                    <span className="text-xs">
                        Role:
                    </span>
                    <span className="font-bold">
                         {position}
                    </span>

                </p>
                <p className="text-gray-600">
                    <span className="text-xs">
                        Seniority:
                    </span>
                    <span className="font-bold">
                         {seniority} {seniority === 1 ? 'year' : 'years'}
                    </span>
                </p>
            </div>
            <div className="flex justify-end self-end space-x-4 w-full">
                <a href={github} target='_blank'>
                    <Icon iconName={faGithub} className="text-gray-600 text-xl"/>
                </a>
                <a href={linkedin} target='_blank'>
                    <Icon iconName={faLinkedin} className="text-gray-600 text-xl"/>
                </a>
            </div>
        </div>
    );
};

export default Card;