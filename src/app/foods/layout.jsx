import FilterBy from '@/components/FilterBy';
import Search from '@/components/Search';
import React from 'react';

const FoodsLayout = ({children}) => {
    return (
        <div className='container mx-auto space-y-10 my-10'>
            <div className='flex justify-between items-center'>
                <FilterBy/>
                <Search/>
            </div>
            {children}
        </div>
    );
};

export default FoodsLayout;