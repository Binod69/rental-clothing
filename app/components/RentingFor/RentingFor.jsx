import Image from 'next/image';
import coffee from '../../img/coffee.webp';
import plane from '../../img/plane.webp';
import Link from 'next/link';

const RentingFor = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center my-6 text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
          I&apos;m renting for...
        </h2>
        <div className="lg:max-w-3xl lg:container">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 ">
            <div className="card card-compact w-32 bg-base-100 ">
              <figure>
                <Link href="/">
                  <Image
                    src={coffee}
                    alt="coffee.webp"
                    quality={80}
                    className=" w-20 lg:w-52"
                  />
                </Link>
              </figure>
              <div className="card-body ms-5">
                <h2 className="card-title ">Work</h2>
              </div>
            </div>
            <div className="card card-compact w-32 bg-base-100 ">
              <figure>
                <Link href="/">
                  <Image
                    src={plane}
                    alt="coffee.webp"
                    quality={80}
                    className=" w-20 lg:w-52"
                  />
                </Link>
              </figure>
              <div className="card-body ms-4">
                <h2 className="card-title ">Vacation</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentingFor;
