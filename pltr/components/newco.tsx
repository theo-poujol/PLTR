import { Tab } from "@headlessui/react";

export default function Newco() {


  return (
    <div className="newco w-full  mt-40">

      <Tab.Group >
        <Tab.List className="text-center space-x-10 bg-black text-white text-lg p-4">
          <Tab className="tracking-widest hover:underline  focus:underline">Nouvelle Collection</Tab>
          <Tab className="tracking-widest hover:underline  focus:underline">À propos de nous</Tab>
          <Tab className="tracking-widest hover:underline  focus:underline">L'esprit PLTR</Tab>
        </Tab.List>
        <Tab.Panels className="bg-white pt-16 p-4">
        
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 1</Tab.Panel>

          <Tab.Panel>Content 2</Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
