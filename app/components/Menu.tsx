'use client';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Box, SwipeableDrawer } from '@mui/material';
import useFilterStore from '@/store/filter';

import Link from 'next/link';
import Loading from '@/ui/Loading';
import getCategories from '@/utils/getCategories';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default function Menu() {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const setCategory = useFilterStore((state) => state.setCategory);
  const setSubCategory = useFilterStore((state) => state.setSubCategory);

  const toggleDrawer = (isOpen: boolean) => (e: React.MouseEvent) => {
    setIsOpen(isOpen);
  };

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { data: categories, isLoading } = getCategories();

  const handleClick = (category: string, subCategory: string) => {
    setCategory(category);
    setSubCategory(subCategory);
  };

  return (
    <menu>
      <button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </button>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        {isLoading && <Loading />}
        {categories && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <Box>
                <button className="p-2" onClick={toggleDrawer(false)}>
                  <CloseIcon className="text-slate-500" />
                </button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  borderBottom: 1,
                  borderColor: 'divider',
                  width: 'min(25rem, 100vw)',
                }}>
                <Tabs variant="scrollable" value={value} onChange={handleChange}>
                  {categories.map((category) => (
                    <Tab key={category.id} label={category.title} />
                  ))}
                </Tabs>
              </Box>
              <div>
                {categories.map((category, index: number) => {
                  return (
                    <TabPanel key={category.id} value={value} index={index}>
                      <ul className="grid gap-2">
                        {category.sub_categories!.map((subCategory) => (
                          <li key={subCategory.id}>
                            <Link
                              onClick={() => handleClick(category.title, subCategory.title)}
                              className="uppercase text-lg text-slate-600 hover:text-slate-950"
                              href={`/products`}>
                              {subCategory.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </TabPanel>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </SwipeableDrawer>
    </menu>
  );
}
