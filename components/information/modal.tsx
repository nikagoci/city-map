import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { MdMyLocation } from "react-icons/md";

const markerWithColors = [
  {category: 'Aquatica', src: '/markers/blue-marker.svg'},
  {category: 'Reserve', src: '/markers/green-marker.svg'},
  {category: 'Bridge', src: '/markers/orange-marker.svg'},
  {category: 'Garden', src: '/markers/lime-marker.svg'},
  {category: 'Monastery', src: '/markers/red-marker.svg'},
  {category: 'Museum', src: '/markers/dark-marker.svg'},
]

interface Props {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export default function Modal({ isOpen, openModal, closeModal }: Props) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Map Guide Helper
                  </Dialog.Title>
                  <div className="mt-6">
                    {/* <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p> */}
                    {markerWithColors.map(marker => (
                      <div key={marker.category} className="flex items-center mb-3">
                        <Image src={marker.src} style={{width: 'auto', height: 'auto'}} alt={marker.category} width={28} height={28} />
                        <span className="w-12 h-[3px] mx-5 bg-cyan-600"></span>
                        <h3 className="text-lg font-semibold">{marker.category}</h3>
                      </div>
                    ))}
                    <div className="flex items-center">
                      <MdMyLocation size={40} color="blue" className='current-location' />
                      <span className="w-12 h-[3px] mx-5 bg-cyan-600"></span>
                      <h3 className="text-lg font-semibold">Current Location</h3>
                    </div>
                  </div>

                  <div className="flex items-center mt-8">
                    <span className="mr-2 text-lg font-bold">NOTICE:</span>
                    <h3 className="underline ">Click any marker on map to hear information.</h3>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
