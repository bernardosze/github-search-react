import { RadioGroup } from '@headlessui/react';

const SearchType = ({ value, setValue }) => {
  return (
    <section className="flex justify-center mb-4">
      <RadioGroup
        className="w-4/5 md:w-96 bg-slate-700 p-1 flex flex-col md:flex-row rounded"
        value={value}
        onChange={setValue}>
        <RadioGroup.Label className="pb-2 md:mr-4 md:py-1 text-center">
          Search Type
        </RadioGroup.Label>
        <div className="bg-slate-600 p-1 flex rounded">
          <RadioGroup.Option
            className="w-32 text-center cursor-pointer z-10"
            value="user">
            User
          </RadioGroup.Option>
          <RadioGroup.Option
            className="w-32 text-center cursor-pointer z-10"
            value="org">
            Organization
          </RadioGroup.Option>
          <span
            className={`${
              value == 'user' ? 'translate-x-0' : 'translate-x-32'
            } order-none flex h-6 w-32 transform rounded-sm bg-fuchsia-600 transition absolute`}
          />
        </div>
      </RadioGroup>
    </section>
  );
};

export default SearchType;
