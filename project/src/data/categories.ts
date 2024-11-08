export interface Category {
  id: string;
  name: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'textarea' | 'file';
  options?: string[];
  required?: boolean;
  placeholder?: string;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    fields: [
      { id: 'title', label: 'Title', type: 'text', required: true },
      { id: 'brand', label: 'Brand', type: 'text', required: true },
      { id: 'model', label: 'Model', type: 'text', required: true },
      {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: ['Phones', 'Laptops', 'Tablets', 'Cameras', 'Gaming', 'Audio', 'TVs', 'Other'],
        required: true
      },
      {
        id: 'condition',
        label: 'Condition',
        type: 'select',
        options: ['New', 'Like New', 'Good', 'Fair', 'For Parts'],
        required: true
      },
      { id: 'description', label: 'Description', type: 'textarea', required: true },
      { id: 'price', label: 'Price', type: 'number', required: true },
      { id: 'images', label: 'Images', type: 'file', required: true }
    ]
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    fields: [
      { id: 'title', label: 'Title', type: 'text', required: true },
      { id: 'make', label: 'Make', type: 'text', required: true },
      { id: 'model', label: 'Model', type: 'text', required: true },
      { id: 'year', label: 'Year', type: 'number', required: true },
      { id: 'mileage', label: 'Mileage', type: 'number', required: true },
      {
        id: 'type',
        label: 'Vehicle Type',
        type: 'select',
        options: ['Car', 'Truck', 'SUV', 'Van', 'Motorcycle', 'RV', 'Boat', 'Other'],
        required: true
      },
      {
        id: 'condition',
        label: 'Condition',
        type: 'select',
        options: ['New', 'Like New', 'Excellent', 'Good', 'Fair', 'Poor'],
        required: true
      },
      { id: 'description', label: 'Description', type: 'textarea', required: true },
      { id: 'price', label: 'Price', type: 'number', required: true },
      { id: 'images', label: 'Images', type: 'file', required: true }
    ]
  },
  {
    id: 'property',
    name: 'Property',
    fields: [
      { id: 'title', label: 'Title', type: 'text', required: true },
      {
        id: 'type',
        label: 'Property Type',
        type: 'select',
        options: ['House', 'Apartment', 'Condo', 'Land', 'Commercial', 'Other'],
        required: true
      },
      { id: 'bedrooms', label: 'Bedrooms', type: 'number', required: true },
      { id: 'bathrooms', label: 'Bathrooms', type: 'number', required: true },
      { id: 'area', label: 'Area (sq ft)', type: 'number', required: true },
      {
        id: 'listing_type',
        label: 'Listing Type',
        type: 'select',
        options: ['For Sale', 'For Rent'],
        required: true
      },
      { id: 'address', label: 'Address', type: 'text', required: true },
      { id: 'description', label: 'Description', type: 'textarea', required: true },
      { id: 'price', label: 'Price', type: 'number', required: true },
      { id: 'images', label: 'Images', type: 'file', required: true }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion',
    fields: [
      { id: 'title', label: 'Title', type: 'text', required: true },
      {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: ['Clothing', 'Shoes', 'Accessories', 'Jewelry', 'Watches', 'Bags', 'Other'],
        required: true
      },
      {
        id: 'size',
        label: 'Size',
        type: 'select',
        options: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Other'],
        required: true
      },
      { id: 'brand', label: 'Brand', type: 'text', required: true },
      {
        id: 'condition',
        label: 'Condition',
        type: 'select',
        options: ['New with tags', 'Like new', 'Good', 'Fair'],
        required: true
      },
      { id: 'description', label: 'Description', type: 'textarea', required: true },
      { id: 'price', label: 'Price', type: 'number', required: true },
      { id: 'images', label: 'Images', type: 'file', required: true }
    ]
  },
  {
    id: 'home_garden',
    name: 'Home & Garden',
    fields: [
      { id: 'title', label: 'Title', type: 'text', required: true },
      {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: ['Furniture', 'Appliances', 'Garden', 'Home Decor', 'Tools', 'Other'],
        required: true
      },
      {
        id: 'condition',
        label: 'Condition',
        type: 'select',
        options: ['New', 'Like New', 'Good', 'Fair'],
        required: true
      },
      { id: 'brand', label: 'Brand', type: 'text', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: true },
      { id: 'price', label: 'Price', type: 'number', required: true },
      { id: 'images', label: 'Images', type: 'file', required: true }
    ]
  },
  {
    id: 'sports',
    name: 'Sports',
    fields: [
      { id: 'title', label: 'Title', type: 'text', required: true },
      {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: ['Fitness', 'Outdoor Sports', 'Team Sports', 'Water Sports', 'Winter Sports', 'Other'],
        required: true
      },
      { id: 'brand', label: 'Brand', type: 'text', required: true },
      {
        id: 'condition',
        label: 'Condition',
        type: 'select',
        options: ['New', 'Like New', 'Good', 'Fair'],
        required: true
      },
      { id: 'description', label: 'Description', type: 'textarea', required: true },
      { id: 'price', label: 'Price', type: 'number', required: true },
      { id: 'images', label: 'Images', type: 'file', required: true }
    ]
  },
  {
    id: 'toys_games',
    name: 'Toys & Games',
    fields: [
      { id: 'title', label: 'Title', type: 'text', required: true },
      {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: ['Board Games', 'Toys', 'Video Games', 'Outdoor Play', 'Educational', 'Other'],
        required: true
      },
      {
        id: 'age_range',
        label: 'Age Range',
        type: 'select',
        options: ['0-2 years', '3-5 years', '6-8 years', '9-11 years', '12+ years', 'All Ages'],
        required: true
      },
      {
        id: 'condition',
        label: 'Condition',
        type: 'select',
        options: ['New', 'Like New', 'Good', 'Fair'],
        required: true
      },
      { id: 'brand', label: 'Brand', type: 'text', required: true },
      { id: 'description', label: 'Description', type: 'textarea', required: true },
      { id: 'price', label: 'Price', type: 'number', required: true },
      { id: 'images', label: 'Images', type: 'file', required: true }
    ]
  },
  {
    id: 'business',
    name: 'Business',
    fields: [
      { id: 'title', label: 'Title', type: 'text', required: true },
      {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: ['Office Supplies', 'Equipment', 'Furniture', 'Software', 'Services', 'Other'],
        required: true
      },
      {
        id: 'condition',
        label: 'Condition',
        type: 'select',
        options: ['New', 'Like New', 'Good', 'Fair'],
        required: true
      },
      { id: 'brand', label: 'Brand', type: 'text', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: true },
      { id: 'price', label: 'Price', type: 'number', required: true },
      { id: 'images', label: 'Images', type: 'file', required: true }
    ]
  },
  {
    id: 'jobs',
    name: 'Jobs',
    fields: [
      { id: 'title', label: 'Job Title', type: 'text', required: true },
      {
        id: 'type',
        label: 'Employment Type',
        type: 'select',
        options: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'],
        required: true
      },
      { id: 'company', label: 'Company Name', type: 'text', required: true },
      { id: 'location', label: 'Location', type: 'text', required: true },
      { id: 'salary', label: 'Salary Range', type: 'text', required: true },
      {
        id: 'experience',
        label: 'Experience Level',
        type: 'select',
        options: ['Entry Level', 'Mid Level', 'Senior Level', 'Executive'],
        required: true
      },
      { id: 'description', label: 'Job Description', type: 'textarea', required: true },
      { id: 'requirements', label: 'Requirements', type: 'textarea', required: true },
      { id: 'benefits', label: 'Benefits', type: 'textarea', required: false }
    ]
  },
  {
    id: 'services',
    name: 'Services',
    fields: [
      { id: 'title', label: 'Service Title', type: 'text', required: true },
      {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: ['Home Services', 'Professional', 'Creative', 'Technical', 'Events', 'Other'],
        required: true
      },
      { id: 'provider_name', label: 'Provider Name', type: 'text', required: true },
      { id: 'location', label: 'Location', type: 'text', required: true },
      {
        id: 'availability',
        label: 'Availability',
        type: 'select',
        options: ['Weekdays', 'Weekends', 'Both', 'Flexible'],
        required: true
      },
      { id: 'rate', label: 'Rate', type: 'text', required: true },
      { id: 'description', label: 'Service Description', type: 'textarea', required: true },
      { id: 'experience', label: 'Experience & Qualifications', type: 'textarea', required: true },
      { id: 'images', label: 'Portfolio Images', type: 'file', required: false }
    ]
  }
];